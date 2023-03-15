// Pinegrow begins

// emit is added on vite-plugin side

import { onMounted, onUpdated, onUnmounted, nextTick } from 'vue'

export function usePinegrow() {
	const mapElToPgId = async (el, pgId, instance, rootVNode, hook) => {
		if (window?.process?.client && process?.client !== true) return
		try {
			await nextTick()

			if (window?.pinegrow?.mapElToPgIdFn) {
				window.pinegrow.mapElToPgIdFn(el, pgId, instance, rootVNode, hook)
			}
		} catch (err) {
			if (window?.pinegrow?.mapElToPgIdFn) {
				window.pinegrow.mapElToPgIdFn(el, pgId, null, rootVNode, err.message)
			}
		}
	}

	const cleanUpRootVNodeCache = () => {
		const unmountedRootNodes = window.pinegrow.rootVNodeCache.filter(
			({ rootVNode }) => rootVNode.component.isUnmounted
		)
		window.pinegrow.rootVNodeCache = window.pinegrow.rootVNodeCache.filter(
			({ rootVNode }) => !rootVNode.component.isUnmounted
		)
		unmountedRootNodes.forEach(({ rootVNode }) => {
			mapElToPgId(null, null, null, rootVNode, 'unmount')
		})
	}

	onMounted(() => cleanUpRootVNodeCache())
	onUpdated(() => cleanUpRootVNodeCache())
	onUnmounted(() => cleanUpRootVNodeCache())

	// @data-pg-id
	const emitDataPgId = defineEmits(['data-pg-id'])

	// v-data-pg-id
	const vDataPgId = {
		mounted: (el, binding, vnode, prevVnode) => {
			// instance = vnode.component, vnode.ctx, binding.instance.$
			mapElToPgId(el, binding.value, vnode.ctx, vnode)
		},
		updated: (el, binding, vnode, prevVnode) => {
			mapElToPgId(el, binding.value, vnode.ctx, vnode)
		},
		unmounted: (el, binding, vnode, prevVnode) => {
			mapElToPgId(el, binding.value, vnode.ctx, vnode, 'unmount')
		}
	}

	const refDataPgId = (pgId) => (customTagInstanceRef) => {
		if (!customTagInstanceRef) {
			return
		}
		if (!customTagInstanceRef.$) {
			// // This is an issue when standard tag is incorrectly considered as custom tag
			// console.log(`Oops, customTagInstanceRef.$ was missing!`)
			// console.log(customTagInstanceRef)
			return
		}

		const instance = customTagInstanceRef.$
		const rootVNode = instance.vnode
		const el = rootVNode.el

		let rootVNodeCacheIndex, rootVNodeCache

		rootVNodeCacheIndex = window.pinegrow.rootVNodeCache.findIndex(
			({ rootVNode: prevRootVNode }) => prevRootVNode.el === rootVNode.el
		)

		if (rootVNodeCacheIndex > -1) {
			// Existing rootVNode
			rootVNodeCache = window.pinegrow.rootVNodeCache[rootVNodeCacheIndex]
		} else if (el) {
			// new rootVNode
			rootVNodeCacheIndex = window.pinegrow.rootVNodeCache.length
			rootVNodeCache = {
				rootVNode,
				status: 'mounted'
			}
			window.pinegrow.rootVNodeCache.push(rootVNodeCache)
		}

		if (!rootVNodeCache && !el) {
			// not mounted yet
			return
		}

		if (el) {
			// Mounted
			if (rootVNodeCache.status === 'mounted' && !rootVNodeCache.el) {
				// newly mounted
				rootVNodeCache.el = el
				mapElToPgId(el, pgId, instance, rootVNodeCache.rootVNode)
			}
			// Updated
			else if (rootVNodeCache.el) {
				rootVNodeCache.status = 'updated'
				mapElToPgId(el, pgId, instance, rootVNodeCache.rootVNode)
			}
		} else {
			// Unmounted
			// Unmount is effected by rootVNode for customTags
			mapElToPgId(null, pgId, instance, rootVNodeCache.rootVNode, 'unmount')
			window.pinegrow.rootVNodeCache.splice(rootVNodeCacheIndex, 1)
		}
	}

	return { vDataPgId, refDataPgId, emitDataPgId }
}
