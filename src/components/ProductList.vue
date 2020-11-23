<template>
    <div class="list-of-products">
        <table class="highlight">
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Артикул</th>
                <th>Серия</th>
                <th>Цена</th>
                <th>Редактировать</th>
            </tr>
            </thead>
            <tbody>
            <product-item v-for="product in paginatedUsers" :key="product.id" :product="product"
            ></product-item>
            </tbody>
        </table>
        <div v-if="isLoading">
            <div class="progress" style="width: 70%">
                <div class="indeterminate"></div>
            </div>
        </div>

        <Paginate
                :page-count="pages"
                :click-handler="pageChangeHandler"
                :prev-text="'Назад'"
                :next-text="'Вперёд'"
                :container-class="'pagination'"
                :page-class="'waves-effect'"
        />
    </div>
</template>

<script>
    import ProductItem from "./ProductItem";
    import Update from "./Update";
    import { mapState } from 'vuex';

    export default {
        name: "ProductList",
        components: {Update, ProductItem},
        data() {
            return {
                pageNumber: 1,
                pageSize: 40,
                pageCount: 0,
            };
        },

        computed: {
            ...mapState(['products', 'isLoading']),
            pages() {
                return Math.ceil(this.products.length / this.pageSize)
            },
            paginatedUsers() {
                let from = (this.pageNumber - 1) * this.pageSize
                let to = from + this.pageSize
                return this.products.slice(from, to)
            }
        },
        methods: {
            pageChangeHandler(page) {
                this.pageNumber = page
            },
        },
    };
</script>
