<template>
    <tr :key="product.id">
        <td>{{ product.id }}  </td>
        <td>{{ product.name }}</td>
        <td>{{ product.vendor_code }}</td>
        <td>{{ product.series }}</td>
        <td>{{ Math.floor(product.price) }}</td>
        <td>
            <router-link :to="{ name: 'Update', params: { id: product.id, productname: product.name }}">
                <a class="waves-effect waves-light btn">Редактировать</a>
            </router-link>
        </td>
    </tr>


</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "ProductItem",
        props: ["product"],

    }
</script>