exports.formatData = (obj={})=>{
    // code: 1000=>成功，250=>失败
    let {data=[],code=1000,msg='success'} = obj;

    if(code === 250){
        msg = 'fail';
    }

    return {
        code,
        data,
        msg
    }
}
