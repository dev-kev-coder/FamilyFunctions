
using System.Net.Http.Headers;
using System.Net.Sockets;
using System.Net;
using System;

namespace Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var app = builder.Build();

            app.UseStaticFiles();
            //app.UseAuthorization();


            /** NOTES:
             *  Probably better practaice to send it over using the HttpResponse object as it just falls in line with convention
             *  I would be really interested what the biggest difference is between what SendFileAsync is doing as opposed to sending over text
             * **/
            //app.MapGet("/", async (HttpContext req, HttpResponse res) =>
            //{
            //    await res.SendFileAsync("wwwroot/index.html");

            //});

            app.MapGet("/", async (HttpContext req, HttpResponse res) =>
            {
                res.Headers.ContentType = "text/html; charset utf-8";

                var homeHTMLPath = Path.Combine("wwwroot", "index.html");

                var homeHTML = await File.ReadAllTextAsync(homeHTMLPath);

                return homeHTML;
            });

            app.MapGet("/games", (HttpContext req, HttpResponse res) =>
            {

                var stop = "here";

                return "test";
            });

            app.Run();
        }
    }
}
