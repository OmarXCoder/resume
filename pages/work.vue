<template>
    <div class="folio-page folio-page-work">
        <div class="folio-container">
            <section class="folio-section text-center">
                <i class="fa fa-mug-hot mb-4 section-icon"></i>
                <h1 class="title folio-heading mb-3">What I've been up to.</h1>
                <p
                    class="folio-text mb-5"
                >Here's a selection of some of my products in the wild, ordered from newer to older.</p>

                <div
                    v-for="(demo, i) in demos"
                    :key="i"
                    class="folio-demo-card mb-5"
                >
                    <div class="demo-img-wrap mb-4">
                        <img
                            :src="demo.previewImg"
                            class="demo-img img-fluid"
                            :alt="demo.title"
                        >
                        <div class="demo-img-overlay">
                            <a
                                :href="demo.previewLink"
                                class="btn btn-sm px-3 btn-warning mr-4"
                            >live demo</a>
                            <a
                                :href="demo.purchaseLink || demo.previewLink"
                                class="btn btn-sm px-3 btn-warning"
                            >purchase</a>
                        </div>
                    </div>
                    <h2 class="title folio-heading mb-4">{{demo.title}}</h2>
                    <div class="mb-4">{{demo.subTitle}}</div>
                    <div
                        class="mb-4 folio-text font-size-sm"
                    >{{demo.description}}</div>
                    <a
                        :href="demo.previewLink"
                        class="btn btn-warning text-dark text-uppercase px-5"
                    >
                        <i class="fa fa-eye mr-2"></i>
                        <span>Preview</span>
                    </a>
                </div>
                <div
                    class="folio-demo-card folio-text font-size-sm text-center"
                >I worked on many custom and private projects using technologies including vuejs, nuxtjs, node, express, mysql, mongodb, php, laravel and wordpress</div>
            </section>
        </div>
        <!-- .folio-container -->
    </div>
    <!-- .folio-page -->
</template>

<script>
export default {
    data() {
        return {
            demos: [
                {
                    title: "Sphinx",
                    subTitle: "VueJS admin dashboard",
                    description:
                        "I recently finished working on sphinx which is a vue.js admin dashboard with huge UI kit and pages. It is build using vue, vuex and vuetify framework and will be avaiable for purchase on themeforest.net soon.",
                    previewLink: "http://sphinx.spantags.net/",
                    previewImg: "images/work/sphinx.jpg"
                },
                {
                    title: "Luxury",
                    subTitle: "Bootstrap 4 admin dashboard",
                    description:
                        "I worked on another admin dashboard using bootstrap 4 for the themeforest.net marketplace",
                    purchaseLink:
                        "https://themeforest.net/item/luxury-responsive-bootstrap-4-admin-template/20881509",
                    previewLink: "http://spantags.net/luxury/",
                    previewImg: "images/work/luxury.jpg"
                },
                {
                    title: "Infinity Landing",
                    subTitle: "Infinity product landing page",
                    description:
                        "A bonus landing page associated with infinity dashboard to be used as a product/service landing page. It's responsive and has nice animations.",
                    purchaseLink:
                        "https://themeforest.net/item/infinity-responsive-web-app-kit/16230780",
                    previewLink:
                        "http://envato.rathemes.com/infinity/landing-page.html",
                    previewImg: "images/work/infinity-landing-page.jpg"
                },
                {
                    title: "Infinity",
                    subTitle: "Bootstrap admin dashboard",
                    description:
                        "Infinity is a responsive bootstrap admin dashboard, it features vast collection of reusable UI components. Infinity was my first product for the themeforest.net market place.",
                    purchaseLink:
                        "https://themeforest.net/item/infinity-responsive-web-app-kit/16230780",
                    previewLink: "http://envato.rathemes.com/infinity/",
                    previewImg: "images/work/infinity.jpg"
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.folio-demo-card {
    padding: $padding-lg;
    display: block;
    border-radius: $border-radius;
    background: lighten(#f5f5f5, 2%);
    box-shadow: 0 2px 4px #ddd;
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0 2px 12px #ddd;
    }
}
.demo-img-wrap {
    position: relative;
    border-radius: $border-radius;
    overflow: hidden;
    .demo-img-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
        opacity: 0;
        transition: opacity 0.8s;
    }

    &:hover .demo-img-overlay {
        opacity: 1;
    }
}

@include media-breakpoint-down(xs) {
    .folio-demo-card {
        padding: $spacer;
    }
}
</style>
