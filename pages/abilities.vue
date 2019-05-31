<template>
    <div class="folio-page folio-page-abilities">
        <div class="folio-container">
            <section class="folio-section text-center">
                <i class="fa fa-swimmer mb-4 section-icon"></i>
                <h2 class="title folio-heading mb-3">Skills</h2>
                <blockquote class="folio-text">
                    <i class="fa fa-quote-left text-grey mr-1"></i> Only those who have patience to do simple things perfectly ever acquire the skill to do difficult things easily.
                    <i
                        class="fa fa-quote-right text-grey ml-1"
                    ></i>
                </blockquote>
                <div class="font-size-sm text-grey">- James J. Corbett</div>
                <div class="flex-container mt-5">
                    <div class="flex" v-for="(skill, i) in skills" :key="i">
                        <div>{{skill}}</div>
                    </div>
                </div>
            </section>

            <section class="folio-section text-center">
                <i class="fa fa-tools mb-4 section-icon"></i>
                <h2 class="title folio-heading mb-3">Tools</h2>
                <blockquote class="folio-text">
                    <i class="fa fa-quote-left text-grey mr-1"></i> The expectations of life depend upon diligence; the mechanic that would perfect his work must first sharpen his tools.
                    <i
                        class="fa fa-quote-right text-grey ml-1"
                    ></i>
                </blockquote>
                <div class="font-size-sm text-grey">- Confucius</div>
                <div class="flex-container mt-5">
                    <div class="flex" v-for="(tool, i) in tools" :key="i">
                        <div>{{tool}}</div>
                    </div>
                </div>
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
            skills: [
                "Bootstrap",
                "CSS3",
                "HTML5",
                "SASS/SCSS",
                "Javascript",
                "JQuery",
                "JSON",
                "VueJs",
                "PHP",
                "Laravel",
                "Wordpress",
                "MySQL",
                "OOP",
                "MVC Pattern",
                "ExpressJS",
                "ElectronJS"
            ],
            tools: [
                "git",
                "webpack",
                "gulp",
                "npm",
                "yarn",
                "composer",
                "CLI",
                "Sublime Text",
                "VS Code",
                "Codepen",
                "Ubuntu"
            ]
        };
    }
};
</script>

<style lang="scss">
.flex-container {
    display: flex;
    flex-wrap: wrap;
    margin: -2px;
    .flex {
        padding: 2px;
        flex: 10% 2 0;
        div {
            background: $darker-warning;
            color: $dark;
            padding: 8px 12px;
            text-align: center;
            box-shadow: 1px 2px 6px #aaa;
        }
    }
}
@include media-breakpoint-down(xs) {
    .flex-container {
        .flex {
            flex-basis: 50%;
        }
    }
}
</style>
