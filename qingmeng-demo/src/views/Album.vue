<!--
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2021-10-22 08:56:00
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2021-10-22 21:20:48
-->
<template>
    <div id="app w-100">
        <div class="header w-100">
            <div class="main mx-auto  d-flex justify-content-between">
                <p>Album</p>
                <p>111</p>
            </div>
        </div>
        <div class="footer pb-5">
            <p class="pt-5">Album example</p>
            <p
                class="mb-5 text-wrap"
            >Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself</p>
            <button type="button" class="btn btn-primary mx-2">button1</button>
            <button type="button" class="btn btn-secondary">button2</button>
        </div>
        <div class="main mx-auto mt-3">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4" v-for="(text,index) in List" :key="index">
                    <div class="card">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="block-info p-5">title</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ text.title }}</h5>
                            <p class="card-text">{{ text.content }}</p>
                            <div class="d-flex justify-content-around">
                                <div>
                                    <a href="#" class="btn btn-ligh">Go</a>
                                    <a href="#" class="btn btn-ligh">Go</a>
                                </div>
                                <p class="mt-2">....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer w-100 p-5">
            <p
                class="text-center"
            >Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself</p>
        </div>
    </div>
</template>
 <!-- <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script> -->
<script>

export default {
    //   name: 'Home',
    data() {
        return {
            List: [],
        }
    },
    components: {

    },
    created() {
        this.sendRequest();
    },
    methods: {
        sendRequest() {
            this.axios.get('/getAlbum').then(res => {
                console.log(res);
                this.List = res.data.List;
            })

        }
    }
}
</script>

<style lang="css" scoped>
#body {
    color: #eee;
}
.header {
    height: 30px;
    background: rgb(42, 32, 32);
}
.main {
    width: 900px;
}
.block-info {
    height: 200px;
    background: rgb(86, 79, 79);
}
.card-body {
    height: 140px;
}
.footer {
    /* height: 180px; */
    background: #eee;
}
.footer p {
    max-width: 900px;
    margin: 0 auto;
}
</style>