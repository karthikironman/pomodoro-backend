const mongoose = require("mongoose");
const Pomo = require("../Model/pomo.model");



const getPomoByTS = async ( timestamp ) => {
    let pomo = await Pomo.find({timestamp});
    return pomo;
}


const setPomoByTSnSelectedNo = async (timestamp, selected_no, state) => {
    try {
      const pomo = await Pomo.findOne({ timestamp });
  
      if (!pomo) {
        // If document doesn't exist, create a new one with the initial selected array
        const newSelected = state ? [selected_no] : [];
        const newPomo = new Pomo({ timestamp, selected: newSelected });
        await newPomo.save();
        return newPomo;
      }
  
      let updatedSelected = [...pomo.selected];
  
      if (state) {
        // Add selected_no if not already present
        if (!updatedSelected.includes(selected_no)) {
          updatedSelected.push(selected_no);
        }
      } else {
        // Remove selected_no if present
        updatedSelected = updatedSelected.filter(num => num !== selected_no);
      }
  
      pomo.selected = updatedSelected;
      await pomo.save();
      return pomo;
    } catch (error) {
      console.error("Error setting pomo by timestamp:", error);
      throw error;
    }
  };

module.exports = {
  getPomoByTS,
  setPomoByTSnSelectedNo
};
