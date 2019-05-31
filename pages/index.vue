<template>
    <div class="folio-page folio-page-index">
        <div class="folio-container">
            <section class="folio-section text-center">
                <img
                    class="avataaars-lg mb-4"
                    src="images/avataaars.svg"
                    alt="avataars"
                >
                <h1 class="title folio-heading mb-4">Hi.</h1>
                <p class="folio-text mb-0">{{bio}}</p>
            </section>
            <section class="folio-section">
                <h1
                    class="title folio-heading text-center mb-5"
                >{{section.title}}</h1>
                <div
                    v-for="(sub, i) in section.sub"
                    :key="i"
                    :class="['folio-sub-section', {'mt-5 flex-row-reverse': i % 2 === 1}]"
                >
                    <div class="text-center">
                        <i :class="['fa', 'sub-section-icon', sub.icon]"></i>
                        <h2 class="title folio-heading">{{sub.title}}</h2>
                    </div>
                    <div class="folio-text sub-section-text" v-html="sub.text"></div>
                </div>
            </section>
        </div>
        <!-- .folio-container -->
    </div>
    <!-- .folio-page -->
</template>

<script>
export default {
    components: {},
    data() {
        return {
            bio:
                "I'm a software developer based in Cairo, Egypt. I have a passion for programming and a B.A. degree in Computer Science. With 5 years experience writing clean code ;)",

            section: {
                title: "What I can do",
                sub: [
                    {
                        title: "develop.",
                        icon: "fa-code",
                        text:
                            "I will convert your design into a vivid, responsive, static or dynamic website to run across devices using the latest front/back-end technologies out there."
                    },
                    {
                        title: "design.",
                        icon: "fa-palette",
                        text:
                            'I excel in development. But when it comes to design, my talented <a class="text-dark-warning" href="http://www.moesaid.com/">partner</a> designer is the guy. We together can bring your idea to life as we have done many projects for envato market together.'
                    }
                ]
            }
        };
    }
};
</script>

<style lang="scss">
.folio-sub-section {
    display: flex;
    align-items: center;

    .sub-section-icon {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: #ccc;
    }

    .sub-section-text {
        flex: 100% 1 1;
    }

    &.flex-row-reverse div:last-child {
        margin-right: $spacer * 2;
    }

    &:not(.flex-row-reverse) div:first-child {
        margin-right: $spacer * 2;
    }
}

.text-dark-warning {
    color: darken($warning, 25%) !important;
}

@include media-breakpoint-down(xs) {
    .folio-sub-section {
        &.flex-row-reverse div:last-child {
            margin-right: $spacer;
        }

        &:not(.flex-row-reverse) div:first-child {
            margin-right: $spacer;
        }
    }
}
</style>
