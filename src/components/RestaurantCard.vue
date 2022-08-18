<template>
    <router-link 
        class="restaurant-card" 
        :to="{ name: 'restaurant', params: { restaurantName: restaurant.name }}"
        style="text-decoration: none; color: inherit;">

        <!-- <div :style="changeBackground" class="restaurant-img"></div> -->
        <div class="image-wrapper">
            <img :src="restaurant.image" :alt="restaurant.name" />
        </div>

        <div class="restaurant-info">
            <div class="top">
                <p class="name">{{ restaurant.name }}</p>
                <p class="note">
                    <span>{{ restaurant.note }}</span>
                </p>
            </div>
            <div class="bottom">
                <span class="symbol"></span>
                <div class="dot"></div>
                <span class="time">{{ restaurant.driveTime }}</span>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
    import Restaurant from '@/models/restaurant'
    import {
        computed
    } from 'vue'

    export default {
        name: 'RestaurantCard',
        props: {
            restaurant: Restaurant
        },
        setup(props) {
            const changeBackground = computed(() => { // <-- Fonction computed
                return {
                    backgroundImage: `url(${props.restaurant?.image})`.toString()
                }
            })

            // Dernière étape du Setup() - return permet d'exposer les variables à la vue
            return {
                changeBackground
            }
        }
    }
</script>

<style lang="scss">
    .routerLink {
        width: 100%;
    }

    .restaurant-card {
        width: 32%;
        height: 25vh;
        border-radius: 5px;
        overflow: hidden;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: 0.8s;
        }

        p {
            margin: 0px;
        }

        .image-wrapper {
            height: 65%;
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            overflow: hidden;
            transition: 0.5s;

            img {        
                object-fit: cover;
                max-width: 100%;
                transition: 0.5s;
            }

            &:hover {
                img {
                    transform: scale(1.2);
                    transition: 0.5s;
                }
            }
        }
        // .restaurant-img {
        //     height: 65%;
        //     width: 100%;
        //     background-size: cover;
        //     object-fit: cover;
        //     background-position: center;
        //     border-top-left-radius: 5px;
        //     border-top-right-radius: 5px;
        //     transition: 0.5s;

        //     &:hover {
        //         opacity: 0.5;
        //         transition: 0.5s;
        //         background-size: 150%;
        //         cursor: pointer;
        //     }

        //     &:not(:hover) {
        //         opacity: 1;
        //         transition: 0.5s;
        //     }
        // }

        .restaurant-info {
            height: 30%;

            .top {
                margin: 10px 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                .name {
                    font-weight: bold;
                }

                .note {
                    background-color: #eee;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    width: 30px;
                    font-size: 0.8rem;
                    border-radius: 50%;
                }
            }

            .bottom {
                display: flex;
                align-items: center;
            }

            .time {
                font-size: 0.9rem;
                color: #05944F;
                border-radius: 5px;
            }

            .dot {
                height: 3px;
                width: 3px;
                border-radius: 10px;
                background-color: #05944F;
                margin: 0px 5px;
            }

            .symbol {
                margin-left: 10px;
                display: flex;
                justify-content: space-between;
                width: 14px;
                height: 9px;
                background-color: #05944F;
                overflow: hidden;

                &:before {
                    content: '';
                    width: 5px;
                    height: 5px;
                    background-color: white;
                    border-radius: 20px;
                    margin-top: 2px;
                    margin-left: -3px;
                }

                &:after {
                    content: '';
                    width: 5px;
                    height: 5px;
                    background-color: white;
                    border-radius: 20px;
                    margin-top: 2px;
                    margin-right: -3px;
                }
            }
        }
    }
</style>