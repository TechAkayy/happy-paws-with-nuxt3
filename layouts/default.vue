<template>
	<div>
		<header style="border-width: 1px; border-color: #94bf62; margin: 10px">
			<h1 style="text-align: center">Default Layout - header section</h1>
		</header>
		<main
			style="
				border-width: 1px;
				border-color: #94bf62;
				margin: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;
			"
		>
			<slot>
				<h2 style="text-align: center">Default Layout - Slot</h2>
				<div>
					<ul>
						<li>
							<span>I'm the default layout <code>default.vue</code></span>
						</li>
						<li>
							<span>I live under the <code>layouts/</code> folder</span>
						</li>
						<li>
							<span
								>You can add me as <code>&lt;NuxtLayout&#47;&gt;</code> in
								<code>app.vue</code></span
							>
						</li>
						<li>
							<span
								>I must have a single root element so that Nuxt can apply
								transitions between layout changes</span
							>
						</li>
						<li>
							<span
								>And this single root element cannot be a
								<code>&lt;Slot&#47;&gt;</code></span
							>
						</li>
					</ul>
				</div>
			</slot>
		</main>
		<footer style="border-width: 1px; border-color: #94bf62; margin: 10px">
			<h1 style="text-align: center">Default Layout - footer section</h1>
		</footer>
	</div>
</template>
