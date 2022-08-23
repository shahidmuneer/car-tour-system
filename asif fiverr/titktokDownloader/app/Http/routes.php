<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


use GuzzleHttp\Psr7;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

Route::get('/', function () {
        // $uri="https://couplesnextdoor.com/widget?page=2&search=&module=sitemember&controller=location&action=userby-locations&rewrite=1&format=html&is_ajax=true&loaded_by_ajax=true&content_id=4798&subject=";
      $uri="localhost:8080/file.html";
      
        // 
        $jar = new \GuzzleHttp\Cookie\CookieJar();
        $client = new \GuzzleHttp\Client([
            'base_uri'=>'couplesnextdoor.com',
            'cookies'=>$jar,
            'headers'=>[
                'User-Agent'=>'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36',
                'Host'=> 'couplesnextdoor.com',
                'Connection'=>'keep-alive',
                'Content-Length'=>'309',
                'Origin'=>'couplesnextdoor.com',
                'Content-Type'=>'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept'=>'text/plain, */*',
                'X-Requested-With'=>'XMLHttpRequest',
                'Accept-Encoding'=>'gzip, deflate',
                'Accept-Language'=>'en-US,en;q=0.8',
                ]
            ]);

        $client = new \GuzzleHttp\Client();
        $res = $client->request("get",$uri,[]);

        // header("content-type:text/plain");
        $html = $res->getBody()->getContents();
        // file_put_contents($html,"data.html");
        \File::put("file.html",$html);
        $data = HTMLDomParser::str_get_html($html)->find('.sitemember_list_view > li');
            dd($data);
      
        // exit;
        // $data = HTMLDomParser::str_get_html($html)->find('body div > video');
        
        // $request = new \GuzzleHttp\Psr7\Request('GET', $uri);
        // $promise = $client->sendAsync($request)->then(function ($response) {
        // //    header("content-type:text/plain");
        //     $html = $response->getBody()->getContents();
        //    echo $html;
        // //    $data = HTMLDomParser::str_get_html($html);//->find('body div > video');
        // //    dd($data);
        // });
        // $promise->wait();

    // return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
