function romanToInt(s)
{
    let count = 0;
    for (let i = 0; i < s.length; i++)
    {
        switch (s[i])
        {
        case 'I':
            count++;
            break;
        case 'V':
            if (i !== 0 && s[i - 1] === 'I')
            {
                count-=2;
            }
            count += 5;
            break;
        case 'X':
            if (i !== 0 && s[i - 1] === 'I')
            {
                count-=2;
            }
            count += 10;
            break;
        case 'L':
            if (i !== 0 && s[i - 1] === 'X')
            {
                count -= 20;
            }
            count += 50;
            break;
        case 'C':
            if (i !== 0 && s[i - 1] === 'X')
            {
                count -= 20;
            }
            count += 100;
            break;
        case 'D':
            if (i !== 0 && s[i - 1] === 'C')
            {
                count -= 200;
            }
            count += 500;
            break;
        case 'M':
            if (i !== 0 && s[i - 1] === 'C')
            {
                count -= 200;
            }
            count += 1000;
            break;
        default:
            console.log("Not valid");
        }
    }
    
}
console.log(romanToInt('MCMXCIV'))