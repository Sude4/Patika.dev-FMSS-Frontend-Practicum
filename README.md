# hafta-1
 
*  Bu fonksiyon "async" olarak tanımlandı ve default olarak dışa aktarıldı. Fonksiyonun içindeki asenkron fonksiyonlar "await" ile tanımlandı.
*  Fonksiyon Number tipinde tek parametre aldı. Bu parametre user id'yi belirtir.
*  Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmektir. İstekleri "axios" kütüphanesini kullanarak yaptım. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirdim.

	 [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

*  Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapıldı.İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirdim.

	[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

