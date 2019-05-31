<template>
    <div class="folio-prime">
        <div class="prime-inner">
            <div class="prime-avatar rounded-circle">
                <img src="images/me3.jpg" :alt="name" class="rounded-circle">
            </div>
            <div class="prime-heading mt-4">
                <h3 class="title ff-sofia">{{heading}}</h3>
            </div>
            <div class="font-weight-light">Web Artisan</div>
            <div class="prime-action mt-5">
                <a :href="hireHref" class="btn btn-dark">{{hireLabel}}</a>
            </div>

            <div class="prime-social mt-5">
                <social-btn
                    v-for="(item, k) in socialLinks"
                    :key="k"
                    v-bind="item"
                ></social-btn>
            </div>
        </div>
        <!-- .prime-inner -->
    </div>
    <!-- .folio-prime -->
</template>

<script>
import SocialBtn from "~/components/SocialBtn";
export default {
    components: { SocialBtn },
    data() {
        return {
            name: "Omar Ali",
            heading: "I'm Omar.",
            hireLabel: "Hire Me",
            hireHref: "mailto:omarxcoder@gmail.com",
            socialLinks: [
                {
                    link: "https://facebook.com/OmarXCoder",
                    icon: "fa-facebook-f",
                    bgHover: "bg-facebook"
                },
                {
                    link: "https://twitter.com/OmarXCoder",
                    icon: "fa-twitter",
                    bgHover: "bg-twitter"
                },
                {
                    link: "https://linkedin.com/in/OmarXCoder/",
                    icon: "fa-linkedin-in",
                    bgHover: "bg-linkedin"
                },
                {
                    link: "https://github.com/omarxcoder",
                    icon: "fa-github",
                    bgHover: "bg-black"
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.folio-prime {
    display: flex;
    justify-content: center;
    background: $dark-warning;
    color: $dark;
    ::selection {
        background-color: $dark;
        color: $warning;
    }
}

.prime-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: $prime-width;
    padding: $padding-lg;
}

.prime-avatar {
    width: 80px;
    height: 80px;
    border: 3px solid $darker-warning;
    img {
        width: 100%;
        height: 100%;
    }
}

.prime-bio {
    line-height: 2;
    font-size: 1.1rem;
}

.prime-action {
    .btn {
        width: 200px;
        color: $warning;
    }
}

@include media-breakpoint-up(lg) {
    .folio-prime {
        width: $prime-width;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
    }

    .prime-inner {
        justify-content: center;
    }

    .prime-avatar {
        width: 120px;
        height: 120px;
    }
}
</style>
