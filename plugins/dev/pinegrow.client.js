export default defineNuxtPlugin((nuxtApp) => {
	// const mapElToPgIdFn = (el, pgId, instance, rootVNode, hook) => {
	// 	try {
	// 		// unmount hook from v-data-pg-id for standard tags
	// 		if (hook === 'unmount' && el) {
	// 			if (window.pinegrow.elToPgIdMap.has(el)) {
	// 				window.pinegrow.elToPgIdMap.delete(el)
	// 			}
	// 			return
	// 		}
	// 		// unmount hook with el as null from refDataPgId for custom tags
	// 		if (hook === 'unmount' && !el && rootVNode) {
	// 			// If argument el is null, the element is unmounted
	// 			for (let [key, value] of window.pinegrow.elToPgIdMap.entries()) {
	// 				if (value.rootVNode === rootVNode) {
	// 					window.pinegrow.elToPgIdMap.delete(key)
	// 				}
	// 			}
	// 			return
	// 		}
	// 		// unmount hook with instanceRef itself as null from refDataPgId for custom tags
	// 		if (hook === 'unmount' && !el && !rootVNode && pgId) {
	// 			for (let [key, value] of window.pinegrow.elToPgIdMap.entries()) {
	// 				if (value.pgId === pgId) {
	// 					window.pinegrow.elToPgIdMap.delete(key)
	// 				}
	// 			}
	// 			return
	// 		}
	// 		// // unmount hook with el as null from refDataPgId for custom tags
	// 		// if (pgId && !el && !instance) {
	// 		// 	// If argument el is null, the element is unmounted
	// 		// 	for (let [key, value] of window.pinegrow.elToPgIdMap.entries()) {
	// 		// 		if (value.pgId === pgId) {
	// 		// 			window.pinegrow.elToPgIdMap.delete(key)
	// 		// 		}
	// 		// 	}
	// 		// 	return
	// 		// }
	// 		// from onMounted > getCurrentInstance()
	// 		// get el from instance
	// 		if (!el && instance) {
	// 			el = instance.vnode?.el
	// 			// We can't proceed without el and only with instance
	// 			if (!el || !el.nodeType) return
	// 		}
	// 		// mount hook with el from refDataPgId for custom tags
	// 		if (el && !instance) {
	// 			if (el.$ || el.__vueParentComponent) {
	// 				instance = el.$ || el.__vueParentComponent
	// 			}
	// 			// We can't proceed without both el and instance
	// 			// TODO: standard tags that are incorrectly considered as custom tags by pgel.isValidTag(), will reach this point. For eg, circle, path, g etc are getting considered as custom tags, and these don't have el.$ via function refs. As they are in fact standard tags, they should ideally have el.__vueParentComponent, but nuxt ssr doesn't help here
	// 			if (!instance) {
	// 				return
	// 			}
	// 		}
	// 		// Make sure el is a valid one with a nodeType
	// 		// This usually happens if onMounted hook is not used from refDataPgId
	// 		if (el && instance && !el.nodeType) {
	// 			el = instance?.vnode?.el
	// 			if (!el || !el.nodeType) {
	// 				return
	// 			}
	// 		}
	// 		if (el && !window.pinegrow.elToPgIdMap.has(el)) {
	// 			addMapping(el, instance, pgId, null, rootVNode)
	// 		}
	// 	} catch (err) {
	// 		errMsg = err.message
	// 		if (errMsg) {
	// 			connectionManager.fallback_tagTransform(errMsg, el, pgId, instance)
	// 		}
	// 	}
	// }
	// const addMapping = (el, instance, pgId, key, rootVNode) => {
	// 	key = key || instance.vnode?.key
	// 	const localFile = instance.vnode?.type.__file
	// 	if (el && el?.nodeType === 1) {
	// 		// IF UPDATING, HAS TO BE DONE WITHIN THE MOUNTED HOOK
	// 		// if (!el.__vueParentComponent) {
	// 		//   el.__vueParentComponent = instance
	// 		// }
	// 		// if (!el.__vnode) {
	// 		//   el.__vnode = instance.vnode
	// 		// }
	// 		window.pinegrow.elToPgIdMap.set(el, {
	// 			pgId,
	// 			key,
	// 			rootVNode,
	// 			instance,
	// 			localFile
	// 		})
	// 	} else {
	// 		const dynamicChildren = instance?.subTree?.dynamicChildren || []
	// 		dynamicChildren.forEach((fragment) => {
	// 			const instance = fragment.component
	// 			let el = instance?.vnode?.el
	// 			if (
	// 				el &&
	// 				el.nodeType &&
	// 				instance &&
	// 				!window.pinegrow.elToPgIdMap.has(el)
	// 			) {
	// 				addMapping(el, instance, pgId, null, rootVNode)
	// 			}
	// 		})
	// 	}
	// 	handleElUpdateFn(el)
	// }
	// const handleElUpdateFn = (el) => {
	// 	if (window.pinegrow.elToPgIdMap.has(el)) {
	// 		const { pgId } = window.pinegrow.elToPgIdMap.get(el)
	// 		if (pgId) {
	// 			// console.log(`Reselect ${pgId}`)
	// 		}
	// 	}
	// }
	// window.pinegrow = {
	// 	mapElToPgIdFn: mapElToPgIdFn,
	// 	handleElUpdateFn: handleElUpdateFn,
	// 	elToPgIdMap: new Map(),
	// 	rootVNodeCache: [
	// 		//   // {
	// 		//   // // instanceRef
	// 		//   // // status: [mounted, updated, unmounted]
	// 		//   // // pgId
	// 		//   // }
	// 	]
	// }
})
