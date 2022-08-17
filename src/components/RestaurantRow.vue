<template>
    <div class="restaurant-row">
        <h2 class="row-title">
            Nos restaurants
        </h2>
        <div class="row">
            <RestaurantCard 
                class="cell"
                v-for="(r, index) in restaurants" :key="index" :restaurant="r">
            </RestaurantCard>
        </div>
    </div>
</template>

<script lang="ts">
import RestaurantCard from './RestaurantCard.vue';

export default {
    name: 'RestaurantRow',
    components: {
        RestaurantCard
    },
    props: {
        restaurants: Array
    }
}
</script>

<style lang="scss">
.restaurant-row {
    .row {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1fr;
        .cell {
            width: auto;
            margin: 0px 10px 10px 10px;
        }
    }
    @media (min-width: 600px) {
        .row {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (min-width: 1024px) {
        .row {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media (min-width: 1380px) {
        .row {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
}
</style>