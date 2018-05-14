module.exports = {
  namespace: "yard",
  state: {
    wagons: ["🚋", "🚋", "🚋", "🚋", "🚋"],
    locomotives: ["🚂", "🚂", "🚂", "🚂"],
    tracks: [{ queue: [], size: 5 }, { queue: [], size: 4 }],
    selectedTrack: 0
  },
  reducers: {
    addWagon: (wagon, state) => ({
      ...state,
      wagons: [...state.pool, wagon]
    }),
    moveWagon: (_, state) => {
      if (state.wagons.length === 0) {
        return state;
      }

      let locomotives = state.locomotives;
      const track = state.tracks[state.selectedTrack];

      if (track.queue.length === 0 && locomotives.length === 0) {
        return state;
      }
      
      if (track.queue.length === 0) {
        locomotives.pop();
        track.queue.push("🚂");
      }
      track.queue.push("🚋");

      return {
        ...state,
        locomotives,
        wagons: [...state.wagons.slice(1)]
      };
    },
    refill: (_, state) => ({
      ...state,
      wagons: Array.from({ length: 10 }, () => "🚋")
    }),
    scheduleTrack: (el, state) => {
      const track = state.tracks[state.selectedTrack];
      track.queue = [];
      return state;
    },
    selectTrack: (el, state) => {
      return {
        ...state,
        selectedTrack: Number(el.target.value)
      };
    }
  }
};
