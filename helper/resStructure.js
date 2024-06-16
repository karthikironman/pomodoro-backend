const send_success_message = async(data,req,res,next) => {
    let json_result = {
        data,
        status:200
    }
    res.status(200).json(json_result)
}

const send_error_message = async(data,req,res,next) => {
    let json_result = {
        error:data,
        status:500
    }
    res.status(500).json(json_result)
}

module.exports = {
    send_success_message,
    send_error_message
}