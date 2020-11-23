<template>
    <div class="form-style-6">
        <h1>Редактироване товара</h1>
        <form @submit="submit">
            <input id="id" v-model="id" type="text" class="validate" hidden>
            <label class="active" for="name" >Название</label>
            <input id="name" v-model="name" type="text" class="validate">
            <label class="active" for="vendor_code">Артикул</label>
            <input v-model="vendor_code" id="vendor_code" type="text" class="validate">
            <input type="submit" value="Сохранить"/>
        </form>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import gql from 'graphql-tag'
    import getproductsquery from '../graphql/getproducts.query.gql'

    const UPDATE_PRODUCTS = gql`
    mutation update_product($id: String, $name: String, $vendor_code: String) {
    update_products(where: {id:{_eq:$id}}, _set: {name: $name, vendor_code: $vendor_code}) {
    returning {
      id
      name
      series
      vendor_code
    }
  }
}
`

    export default {
        name: "Update",
        data: () => ({
            product: '',
            id: '',
            name: '',
            vendor_code: '',
        }),
        computed: {
            ...mapState(['products', 'isLoading']),
        },
        mounted() {
            this.product = this.$store.getters.productById(this.$route.params.id)
            this.id = this.product[0].id
            this.name = this.product[0].name
            this.vendor_code = this.product[0].vendor_code
        },
        methods: {
            submit(e){
                e.preventDefault();
                console.log(this.$data)
                const { id, name, vendor_code} = this.$data
                this.$apollo.mutate({
                    mutation: UPDATE_PRODUCTS,
                    variables: {
                        id,
                        name,
                        vendor_code
                    },
                    refetchQueries: ['getproductsquery']
                })
                this.$router.push('/')
            }
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
    .form-style-6 input[type="number"] {
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