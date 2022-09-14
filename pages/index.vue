<script setup>
</script>

<template>
	<div>
		
		<h2 style="text-align: center">index.vue</h2>
		<div>
			<ul>
				<li>
					<span>I'm the index page <code>index.vue</code></span>
				</li>
				<li>
					<span>I live under the <code>pages/</code> folder</span>
				</li>
				<li>
					<span>I'm added as <code>&lt;NuxtPage&#47;&gt;</code> in
						<code>app.vue</code></span>
				</li>
				<li>
					<span>You can wrap me within <code>&lt;NuxtLayout&#47;&gt;</code> if you
						have a default layout</span>
				</li>
				<li>
					<span>I must have a single root element so that Nuxt can apply
						transitions between pages</span>
				</li>
				<li>
					<span>Make sure there are no HTML comments at the same level as the
						single root element</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>.name {
		color: green;
		font-weight: bold;
	}</style>
