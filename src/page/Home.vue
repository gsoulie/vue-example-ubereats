<template>
  <div class="home">
    <Header :searchResults="data" @response="searchRestaurant"></Header>
    <RestaurantRow :restaurants="data"></RestaurantRow>
  </div>
</template>

<script lang="ts">
import RestaurantRow from '../components/RestaurantRow.vue';
import Header from '../components/Header.vue';
import Restaurant from '../models/restaurant';
import { ref, onMounted } from 'vue';
import DataService from '@/services/data.service';

export default {
    name: 'Home',
    components: {
        RestaurantRow,
        Header
    },
    setup() {
        const allData = ref<Restaurant[]>([]); // ref() nécessaire pour déclarer la variable "observable"
        // sans le ref(), toute modification des données ne déclencherai pas de changement dans la vue
        const data = ref<Restaurant[]>([]);
        
        // IE : ngOnInit()
        onMounted(() => { initializeDatabase(); });
        
        function initializeDatabase() {
            allData.value = DataService.getRestaurants();
            data.value = allData.value;
        }  

        function searchRestaurant(e: any) {
            data.value = DataService.filteringRestaurantByName(e);
        }
        
        // Dernière étape du Setup() - return permet d'exposer les variables à la vue
        return {
            searchRestaurant,
            data,
        }
    }
}
</script>

<style lang="scss">
    .home {
        padding: 0px 5px;
    }
    @media (min-width: 500px) {
        .home {
            padding: 0px 20px
        }
    }
</style>