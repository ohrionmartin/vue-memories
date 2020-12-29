<template>
    <ion-item :router-link="`/memories/${memory.id}`">
    <!-- <template v-slot:start> -->
        <ion-thumbnail slot="start">
            <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
    <!-- </template> -->
    <ion-label>
        {{ memory.title }}
    </ion-label>
    </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";

export default {
    props:["memory"],
    components: {
        IonItem,
        IonThumbnail,
        IonImg,
        IonLabel
    }
    
}
</script>