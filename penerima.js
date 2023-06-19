var mqtt = require('mqtt')
var client = mqtt.connect('http://test.mosquitto.org')
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'healthyricefields'
});
var data1;
var data2;
var data3;
var data4;
var data5;
var data6;



connection.connect();

client.on('connect', function(){
	client.subscribe('nodejs123/n',function(err){
    })
  client.subscribe('nodejs123/p',function(err){
    })
  client.subscribe('nodejs123/k',function(err){
    })
  client.subscribe('nodejs123/kel',function(err){
    })
  client.subscribe('nodejs123/ph',function(err){
    })
  client.subscribe('nodejs123/status',function(err){
    })
})

client.on ('message',function (topic, payload) {
      if (topic === 'nodejs123/n') {
        data1 = payload;
      }
    
      if (topic === 'nodejs123/p') {
        data2 = payload;
      }
      if (topic === 'nodejs123/k') {
        data3 = payload;
      }
      if (topic === 'nodejs123/kel') {
        data4 = payload;
      }
      if (topic === 'nodejs123/ph') {
        data5 = payload;
      }
      if (topic === 'nodejs123/status') {
        data6 = payload;
      }
      console.log('Received Message:', topic,payload.toString())
    connection.query('INSERT INTO tb_parameter (`id_parameter`, `persen_n`, `persen_p`, `persen_k`, `persen_kelembapan`, `persen_ph`, `status`, `datetime`) VALUES(NULL,"' + data1 + '","' + data2 + '","' + data3 + '","' + data4 + '","' + data5 + '","' + data6 + '",current_timestamp())' , function (error, results, fields) {

        // connection.query('INSERT INTO tb_parameter (`id_parameter`, `persen_n`, `persen_p`, `persen_k`, `persen_kelembapan`, `persen_ph`, `status`, `datetime`) VALUES(NULL, current_timestamp(),"' + data1 + '","' + data2 + '","' + data3 + '","' + data4 +'")' , function (error, results, fields) {
  
  });

})

