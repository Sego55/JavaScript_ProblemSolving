
function timeConversion(s) {
    // Write your code here
    function padding (index)
    {
        if (index < 10)
        {
            return ('0'+index);
        }
        else
        {
            return index;
        }
    }
    let part =  s.split(':');
    console.log(part);
    let hour =Number(part[0])
    let min = Number(part[1])
    let sec = Number(part[2][0] + part[2][1])
    if ('PM' === (part[2][2] + part[2][3]))
    {
        if (hour !== 12 )
        {
            hour = hour +12;
        }
        
    }
    else
    {
        if (hour === 12 )
        {
            hour = hour -12;
        }
    }
    return (padding(hour)+':'+padding(min)+':'+ padding(sec));

}
console.log( timeConversion( "12:05:45AM"));