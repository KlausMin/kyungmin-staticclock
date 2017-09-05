import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var noon = "AM";
    if(hour > 12){
      noon = "PM";
      hour -= 12;
    }

    if(hour < 10)
      hour = "0" + hour;
    if(min < 10)
      min = "0" + min;
    if(sec < 10)
      sec = "0" + sec;

    var time = hour + ":" + min + ":" + sec + noon;

    return [time];
  }
});
