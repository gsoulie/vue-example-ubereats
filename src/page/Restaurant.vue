<template>
  <div class="content">
    <div class="header">
        <img :src="restaurant.image" />
    </div>
    <div class="infos">
        <h1>{{ restaurant.name }}</h1>
        <p>{{ restaurant.note }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from '@vue/runtime-core';
import DataService from '@/services/data.service';
import Restaurant from '@/models/restaurant';
import { onBeforeMount } from 'vue';
import router from '@/router';

export default {
    name: 'RestaurantModale',
    props: [
        'restaurantName'
    ],
    setup(props) {
        const restaurant = ref<Restaurant>(null);
        const p = router.currentRoute.value.params

        console.log('params', p);
        
        
        onBeforeMount(() => {
            restaurant.value = DataService.getRestaurantByName(props.restaurantName);
        })
        
        onMounted(() => {
            
        })

        // Dernière étape du Setup() - return permet d'exposer les variables à la vue
        return {
            restaurant
        }
    }
}
</script>

<style lang="scss">
.content {
    .header {
        height: 160px;
        width: 100%;
        background-color: orange;
        overflow: hidden;

        img {
            height: 100%;
            transform: scale(4);
        }
    }
    .infos {
        padding: 10px 30px;
    }
}
</style>