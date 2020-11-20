<template>
    <div class="form-style-6">
        <h1>Редактироване товара</h1>
        <form>
            <label class="active" for="name">Название</label>
            <input :value="name" id="name" type="text" class="validate">
            <label class="active" for="code">Артикул</label>
            <input :value="code" id="code" type="number" class="validate">
            <router-link to="/"><input type="submit" value="Сохранить" /></router-link>
        </form>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Update",
        data: () => ({
            product: '',
            id: '',
            name: '',
            code: ''

        }),
        computed: {
            ...mapState(['products', 'isLoading']),
        },
        mounted() {
            this.product = this.$store.getters.productById(this.$route.params.id)
            this.id = this.product[0].id
            this.name = this.product[0].name
            this.code = this.product[0].vendor_code
        }
    }

</script>

<style scoped>

    .form-style-6 {
        font: 95% Arial, Helvetica, sans-serif;
        max-width: 400px;
        margin: 10px auto;
        padding: 16px;
        background: #F7F7F7;
    }

    .form-style-6 h1 {
        background: #2BBBAD;
        padding: 20px 0;
        font-size: 140%;
        font-weight: 300;
        text-align: center;
        color: #fff;
        margin: -16px -16px 16px -16px;
    }

    .form-style-6 input[type="text"],
    .form-style-6 input[type="date"],
    .form-style-6 input[type="number"]
    {
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
        outline: none;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        background: #fff;
        margin-bottom: 4%;
        border: 1px solid #ccc;
        padding: 3%;
        color: #555;
        font: 95% Arial, Helvetica, sans-serif;
    }

    .form-style-6 input[type="text"]:focus,
    .form-style-6 input[type="number"]:focus,
    .form-style-6 input[type="submit"],
    .form-style-6 input[type="button"] {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        width: 100%;
        padding: 3%;
        background: #2BBBAD;
        border-bottom: 2px solid #2BBBAD;
        border-top-style: none;
        border-right-style: none;
        border-left-style: none;
        color: #fff;
    }

    .form-style-6 input[type="submit"]:hover,
    .form-style-6 input[type="button"]:hover {
        background: #2BBBAD;
    }

</style>