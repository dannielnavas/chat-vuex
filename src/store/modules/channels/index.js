const module = {
  namespaced: true,
  state() {
    return {
      channel: null,
      channels: [
        {
          id: 1,
          name: "Canal 1",
          messages: null,
        },
        {
          id: 2,
          name: "Canal 2",
          messages: null,
        },
        {
          id: 3,
          name: "Canal 3",
          messages: null,
        },
        {
          id: 4,
          name: "Canal 4",
          messages: null,
        },
      ],
    };
  },
  getters: {
    getChannels: (state, getters, rootState, rootGetters) => (search) => {
      return state.channels
        .filter((channel) => {
          return channel.name.toLowerCase().includes(search.toLowerCase()) ?? true;
        })
        .map((channel) => {
          const messages = rootGetters["messages/getUnreadMessages"](channel.id);
          return {
            ...channel,
            messages,
          };
        });
    },
  },
  mutations: {
    setChannel(state, channel) {
      state.channel = channel;
    },
  },
};

export default module;
