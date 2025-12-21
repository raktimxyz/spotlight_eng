import { formatDistanceToNow } from "date-fns";
import { decode } from 'he';

const stripHtml = (html) => {
    const withoutTags = html.replace(/<\/?[^>]+(>|$)/g, ''); // Remove HTML tags
    return decode(withoutTags); // Decode HTML entities using the library
};

export const FGetWord     = ( details, limit = null ) => {
    const plainText = stripHtml( details );
    return plainText.split( ' ' ).slice( 0, limit ).join( ' ' ) + '...';
};

export default FGetWord;
const FFormatHumanTime = (time) => {
    // Remove 'about' and split the string
    let arrTime = time.replace('about', '').trim().split(" ");

    // Clean up the array to remove any empty strings
    arrTime = arrTime.filter(part => part !== '');

    // Handle singular and plural forms
    if (arrTime.length > 1) {
        const unit = arrTime[1].replace(/s$/, ''); // Remove 's' for plural forms
        arrTime[1] = unit; // Update the second element with the singular form
    }

    const en = [
        "second", "minute", "hour", "day", "week", "month", "year", "ago",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ];
    const bn = [
        "সেকেন্ড", "মিনিট", "ঘণ্টা", "দিন", "সপ্তাহ", "মাস", "বছর", "আগে",
        "০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"
    ];

    return arrTime.map(part => {
        en.forEach((word, index) => {
            part = part.replace(new RegExp(word, 'g'), bn[index]);
        });
        return part;
    }).join(" ");
};

export const ShowTimeWhen = (time1, time2) => {
    return FFormatHumanTime(formatDistanceToNow(new Date(time1 || time2), { addSuffix: true }));
};


const convertTimeToBengali = ( input ) => {
    const englishToBengaliDigits = {
        "0" : "০", "1" : "১", "2" : "২", "3" : "৩", "4" : "৪", "5" : "৫", "6" : "৬", "7" : "৭", "8" : "৮", "9" : "৯",
    };
    return input.replace( /\d/g, ( digit ) => englishToBengaliDigits[ digit ] )
};

export const formatBengaliTime = ( dateTime ) => {
    const date = new Date( dateTime );

    const bengaliDate          = new Intl.DateTimeFormat( "bn-BD", {
        day : "numeric", month : "long", year : "numeric",
    } ).format( date );
    const bengaliTime          = new Intl.DateTimeFormat( "en-US", {
        hour : "2-digit", minute : "2-digit", hour12 : true,
    } ).format( date );
    const bengaliFormattedTime = convertTimeToBengali( bengaliTime );

    const finalTime = bengaliFormattedTime.replace( "AM", "এএম" ).replace( "PM", "পিএম" );
    return `${ bengaliDate }, ${ finalTime }`;
}

export const ConvertedDetails = (details) => {
    return stripHtml( details );
}

