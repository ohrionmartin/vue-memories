import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: 'm1',
                    image: "https://www.mensjournal.com/wp-content/uploads/1995/05/alex-honnold-jimmy-chin.jpg?quality=86&strip=all",
                    title: 'A trip into the mountain',
                    description: 'It was a really nice trip!'
                },
                {
                    id: 'm2',
                    image: "https://thumbs.dreamstime.com/b/adventurous-man-surfer-wetsuit-walking-sandy-beach-surfboard-raft-cove-vancouver-island-british-columbia-canada-191089112.jpg",
                    title: 'Surfing',
                    description: 'It was a really nice surf!'
                },
                {
                    id: 'm3',
                    image: "https://www.oars.com/wp-content/uploads/2017/06/Travel-Babbo_Stoen_170409_0429-3-e1521063790694.jpg",
                    title: 'Swimming',
                    description: 'It was a really nice swim!'
                },{
                    id: 'm4',
                    image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_512358000_239361.jpg",
                    title: 'General',
                    description: 'It was a really nice general!'
                },
            ]
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        }
    }
});

export default store;