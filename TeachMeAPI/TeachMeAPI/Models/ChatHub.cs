using System;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace TeachMeAPI
{
    public class ChatHub : Hub
    {
        public void Send(string name, string message)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(name, message);
        }

        public void CreateAnnouncemement(string username, string title, string course, string description)
        {
            Clients.All.broadcastAnnouncement(username, title, course, description);
        }
    }
}