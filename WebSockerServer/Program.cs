using System.Net.Sockets;
using System.Net;
using System;
using System.Text;
using System.Text.RegularExpressions;
using System.ComponentModel.DataAnnotations;

namespace WebSockerServer
{
    internal class Program
    {
        static void Main()
        {
            var ipAddress = IPAddress.Parse("127.0.0.1");
            var port = 80;
            var webSocketServer = new TcpListener(ipAddress, port);

            webSocketServer.Start();
            Console.WriteLine($"WebSocketServer has stared on {ipAddress}:{port}. Waiting for a connection...");


            var client = webSocketServer.AcceptTcpClient();
            Console.WriteLine("A client connected");

            var stream = client.GetStream();

            var minimumNumberOfBytesHasNotBeenMet = client.Available < 3;

            // This blocks our program. How can this be done asynchronusly?
            while (minimumNumberOfBytesHasNotBeenMet)
            {

            }

            byte[] dataInBytes = new byte[client.Available];

            // Read data from client and puts them in our byte array
            stream.Read(dataInBytes, 0, dataInBytes.Length);

            var data = Encoding.UTF8.GetString(dataInBytes);

            Console.WriteLine("GET Request from client...");
            Console.WriteLine(data);

            if (Regex.IsMatch(data, "GET"))
            {
                var response = BuildResponse();
            } else
            {

            }
        }

        public static string BuildResponse()
        {
            var endOfLine = "\r\n";

            var stringResponse = new StringBuilder();

            stringResponse.AppendLine("HTTP/1.1 101 Switching Protocols");
            stringResponse.AppendLine(endOfLine);
            stringResponse.AppendLine("Connection: Upgrade");
            stringResponse.AppendLine(endOfLine);
            stringResponse.AppendLine("Upgrade: websocket");
            stringResponse.AppendLine(endOfLine);
            stringResponse.AppendLine("Sec-WebSocket-Accept");

        }
    }
}
