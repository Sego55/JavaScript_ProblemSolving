function plusMinus(arr) {
    // Write your code here
        let Postive= 0;
        let Negative = 0;
        let Zeros = 0;
        for(let i =0;i<arr.length;i++)
        {
            if (arr[i] < 0)
            {
                Negative++;
            }
            else if (arr[i] > 0)
            {
                Postive++;
            }
            else
            {
                Zeros++;
            }
        }
        console.log((Postive/arr.length).toFixed(6) +'\n'+ (Negative/arr.length).toFixed(6) + '\n'+ (Zeros/arr.length).toFixed(6));
    }