// code your solution here
function saturdayFun(target){
    if (typeof target === 'string'){
    return `This Saturday, I want to ${target}!`;
    }
    else{
    return "This Saturday, I want to roller-skate!";
    }
}
saturdayFun('exercise');
function mondayWork(study){
    if(typeof study === 'string'){
    return `This Monday, I will ${study}.`;
    }
    else{
        return 'This Monday, I will go to the office.' ;
    }
}
mondayWork();

function wrapAdjective(argument){
    const adjective = function(argument2){
        if(argument === '*'){
        return `You are ${argument}${argument2}${argument}!`
    }
    else if(argument === '||'){
            return `You are ${argument}${argument2}${argument}!`
    }
}

    return adjective;
}
wrapAdjective("*")("a dedicated programmer"); 