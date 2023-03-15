<template>
    <div class="bg-black bg-opacity-90 pt-12 text-gray-300">
        <div class="container mx-auto px-4 relative">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full p-4 xl:w-4/12">
                    <NuxtLink to="/" class="font-bold font-serif hover:text-opacity-75 inline-flex items-center leading-none mb-6 text-3xl text-primary-500">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="2.5em" xml:space="preserve" fill="currentColor" viewBox="0 0 240 240" height="2.5em" class="mr-2">
                            <g transform="translate(17.704 -9.215)">
                                <path d="M92.45 183.38a61.38 61.38 0 00-30.07 15.35 9.84 9.84 0 01-15.9-3.73 61.65 61.65 0 11115.83-.18 9.87 9.87 0 01-16 3.9 61.43 61.43 0 00-30.07-15.35" fill="#99cd31" stroke="#475f17" stroke-miterlimit="10" stroke-width="12"></path>
                                <circle cx="17.18" cy="17.18" r="17.18" transform="rotate(-22.39 282.115 44.556)" fill="#99cd31" stroke="#475f17" stroke-miterlimit="10" stroke-width="12"></circle>
                                <circle cx="17.18" cy="17.18" r="17.18" transform="rotate(-22.39 179.693 -83.499)" fill="#99cd31" stroke="#475f17" stroke-miterlimit="10" stroke-width="12"></circle>
                                <circle cx="17.18" cy="17.18" r="17.18" transform="rotate(-67.61 176.48 -54.394)" fill="#99cd31" stroke="#475f17" stroke-miterlimit="10" stroke-width="12"></circle>
                                <circle cx="17.18" cy="17.18" r="17.18" transform="rotate(-67.61 119.616 -48.074)" fill="#99cd31" stroke="#475f17" stroke-miterlimit="10" stroke-width="12"></circle>
                                <circle cx="3.19" cy="3.19" r="3.19" transform="translate(101.16 179.05)" fill="#475f17"></circle>
                                <path d="M89.72 137a20.84 20.84 0 00-20.84 20.84v.16" fill="none" stroke="#475f17" stroke-miterlimit="10" stroke-width="12"></path>
                                <path d="M15.7 47.82h-2.75v-2.76a3.4 3.4 0 00-6.79 0v2.76H3.4a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zm172.43 9.55h-2.76v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.76v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79zM25.25 203.82H22.5v-2.76a3.4 3.4 0 00-6.79 0v2.76h-2.76a3.4 3.4 0 000 6.79h2.75v2.76a3.4 3.4 0 006.79 0v-2.76h2.76a3.4 3.4 0 000-6.79z" fill="#475f17"></path>
                            </g>
                        </svg>
                        <span>Happy Paws</span>
                    </NuxtLink>
                    <p class="mb-6 text-sm">
            Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec.
            Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper
            semper. </p>
                    <div class="mb-6">
                        <NuxtLink to="/" class="hover:text-primary-600">+1 234 567-890</NuxtLink><br/>
                        <NuxtLink to="/" class="hover:text-primary-600">hello@fantico.com</NuxtLink>
                    </div>
                    <div class="flex-wrap inline-flex space-x-3">
                        <NuxtLink to="/" aria-label="facebook" class="hover:text-primary-600">
                            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/" aria-label="twitter" class="hover:text-primary-600">
                            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/" aria-label="instagram" class="hover:text-primary-600">
                            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/" aria-label="linkedin" class="hover:text-primary-600">
                            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/" aria-label="youtube" class="hover:text-primary-600">
                            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
                <div class="p-4 w-full sm:w-6/12 md:flex-1 md:w-auto">
                    <h2 class="font-bold text-primary-500 text-xl">General</h2>
                    <hr class="border-primary-500 my-6 opacity-25 w-3/12"/>
                    <ul>
                        <li class="mb-4">
                            <NuxtLink to="/" class="hover:text-primary-600">FAQ</NuxtLink>
                        </li>
                        <li class="mb-4">
                            <NuxtLink to="/" class="hover:text-primary-600">News</NuxtLink>
                        </li>
                        <li class="mb-4">
                            <NuxtLink to="/" class="hover:text-primary-600">Careers</NuxtLink>
                        </li>
                        <li class="mb-4">
                            <NuxtLink to="/" class="hover:text-primary-600">Contact Us</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="p-4 w-full sm:w-6/12 md:flex-1 md:w-auto">
                    <h2 class="font-bold text-primary-500 text-xl">Links</h2>
                    <hr class="border-primary-500 my-6 opacity-25 w-3/12"/>
                    <ul>
                        <li class="mb-4">
                            <NuxtLink to="/about-us" class="hover:text-primary-600">About Us</NuxtLink>
                        </li>
                        <li class="mb-4">
                            <NuxtLink to="/blog" class="hover:text-primary-600">blog</NuxtLink>
                        </li>
                        <li class="mb-4">
                            <NuxtLink to="/adopt" class="hover:text-primary-600">Adopt</NuxtLink>
                        </li>
                        <li class="mb-4">
                            <NuxtLink to="/volunteer" class="hover:text-primary-600">Volunteer</NuxtLink>
                        </li>
                        <li class="mb-4">
                            <NuxtLink to="/donate" class="hover:text-primary-600">Donate</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="p-4 w-full md:w-5/12 xl:w-4/12">
                    <h2 class="font-bold text-primary-500 text-xl">Gallery</h2>
                    <hr class="border-primary-500 my-6 opacity-25 w-3/12"/>
                    <div class="-mx-2 flex flex-wrap items-center">
                        <div class="p-2 w-1/2 sm:w-4/12">
                            <NuxtLink to="" class="block hover:opacity-75 overflow-hidden rounded-xl">
                                <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDF8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop" width="300" height="250" class="w-full"/>
                            </NuxtLink>
                        </div>
                        <div class="p-2 w-1/2 sm:w-4/12">
                            <NuxtLink to="" class="block hover:opacity-75 overflow-hidden rounded-xl">
                                <img src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE1fHxjYXR8ZW58MHx8fHwxNjMwNDY3NzE4&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop" width="300" height="250" class="w-full"/>
                            </NuxtLink>
                        </div>
                        <div class="p-2 w-1/2 sm:w-4/12">
                            <NuxtLink to="" class="block hover:opacity-75 overflow-hidden rounded-xl">
                                <img src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIzfHxwZXR8ZW58MHx8fHwxNjMwNDYyNTIz&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop" width="300" height="250" class="w-full"/>
                            </NuxtLink>
                        </div>
                        <div class="p-2 w-1/2 sm:w-4/12">
                            <NuxtLink to="" class="block hover:opacity-75 overflow-hidden rounded-xl">
                                <img src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI3fHxjYXR8ZW58MHx8fHwxNjMwNDY3NzE4&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop" width="300" height="250" class="w-full"/>
                            </NuxtLink>
                        </div>
                        <div class="p-2 w-1/2 sm:w-4/12">
                            <NuxtLink to="" class="block hover:opacity-75 overflow-hidden rounded-xl">
                                <img src="https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI4fHxwZXR8ZW58MHx8fHwxNjMwNDYyNTIz&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop" width="300" height="250" class="w-full"/>
                            </NuxtLink>
                        </div>
                        <div class="p-2 w-1/2 sm:w-4/12">
                            <NuxtLink to="" class="block hover:opacity-75 overflow-hidden rounded-xl">
                                <img src="https://images.unsplash.com/photo-1591561582301-7ce6588cc286?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxyYWJiaXR8ZW58MHx8fHwxNjMwNDY3NjUw&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop" width="300" height="250" class="w-full"/>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4 text-center">
                <hr class="mb-4 opacity-25"/>
                <p class="py-1 text-sm">
          &copy; 2002 - 2021. All Rights Reserved - Company Name </p>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
