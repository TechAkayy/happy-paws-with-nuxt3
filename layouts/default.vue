<template>
    <div class="bg-gray-100 text-gray-500">
        <header>
            <AppBar/>
            <NavBar/>
        </header>
        <main>
            <slot>
                <h2 style="text-align: center">Default Layout - Slot</h2>
                <div>
                    <ul>
                        <li><span>I'm the default layout <code>default.vue</code></span>
                        </li>
                        <li><span>I live under the <code>layouts/</code> folder</span>
                        </li>
                        <li><span>I'm added as <code>&lt;NuxtLayout&#47;&gt;</code> in <code>app.vue</code></span>
                        </li>
                        <li><span>I must have a single root element so that Nuxt can apply
                transitions between layout changes</span>
                        </li>
                        <li><span>And this single root element cannot be a <code>&lt;Slot&#47;&gt;</code></span>
                        </li>
                    </ul>
                </div>
            </slot>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
</template>
