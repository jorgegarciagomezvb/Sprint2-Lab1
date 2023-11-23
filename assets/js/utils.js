export const formatDateAgo = (value) =>{
    //tiempo desde la fecha
    const timeAgo = new Date(value).getTime();
    const ahora = new Date().getTime();
    const dif = ahora - timeAgo;
    const seg = dif / 1000;
    const min = seg / 60;
    const hours = min / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = months / 12;
    if(seg < 60){
        return `Hace ${Math.round(seg)} segundos`
    }
    if(min < 60){
        return `Hace ${Math.round(min)} minutos`
    }
    if(hours < 60){
        return `Hace ${Math.round(hours)} horas`
    }
    if(days < 60){
        return `Hace ${Math.round(days)} días`
    }
    if(months < 60){
        return `Hace ${Math.round(months)} meses`
    }
    return `Hace ${Math.round(years)} años`
}