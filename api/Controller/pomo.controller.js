const {
  send_success_message,
  send_error_message,
} = require("../../helper/resStructure");
const PomoService = require("../Services/pomo.service");

const get_pomo = async (req, res, next) => {
    console.log(req.query)
    let timestamp = req.query.timestamp;
    if(!timestamp){
        send_error_message("timestamp missing", req, res, next);
    }
  try {
    let pomo = await PomoService.getPomoByTS(timestamp);
    send_success_message(pomo, req, res, next);
  } catch (err) {
    console.log(err);
    send_error_message(err, req, res, next);
  }
};
const post_pomo = async (req, res, next) => {
  let pomo_ts = req.body.timestamp;
  let selected_no = req.body.selected_no; //note this is a single numer
  let state = req.body.state;

  if (pomo_ts === undefined) {
    send_error_message("pomo ts missing", req, res, next);
  }
  if(selected_no === undefined){
    send_error_message("selected array missing", req, res, next);
  }
  if(state === undefined){
    send_error_message("state is missing", req, res, next);
  }
  try {
    let pomoResult = await PomoService.setPomoByTSnSelectedNo(pomo_ts, selected_no, state);
    send_success_message(pomoResult, req, res, next);
  } catch (err) {
    send_error_message(err, req, res, next);
  }
};

module.exports = {
 get_pomo,
 post_pomo
};
