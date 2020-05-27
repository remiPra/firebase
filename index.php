<?php

function SendNotification($to='',$data=array()){
  $apiKey="BOGkHZhVVxt7dwG_Ma8bBRdkFnMMY7NHdZpe7n800HUsLaf6i7EJGmrDk5C9pYVdCa6eTsVG-cwZAFK6GZsJAJk";
  $fields= array('to'=>$to,"notification"=>$data);
  $headers=array('Authorisation:key='.$apiKey.',Content-type:application/json');
  $url = 'https://fcm.googleapis.com//v1/projects/simply-notify-68b52/messages:send';
  $ch=curl_init();
  curl_setopt($ch,CURLOPT_URL,$url);
  curl_setopt($ch,CURLOPT_POST,true);
  curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
  
  curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
  curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($fields));
  
  $result=curl_exec($ch);
  curl_close($ch);
  return json_decode($result,true);
  var_dump($result);
}
$to="d6xz_7gZgynvnSpy_ZawTd:APA91bEQdwmIf5oggtAr_-Zc8QJNUzRBSxzQ8BNj8lEKkmCFaBbYphGFEjXrXi9So39HgHGgZT1irLB2Pk1LAoOTyf3ujVQfb2iZgQuxyJfqWqKkmw1-q4lywCPAv6eyzQdKEELJT-jA";
$data=array(
  'body'=>'New Message'
);
var_dump(SendNotification($to,$data));
print_r(SendNotification($to,$data));


?>