using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TeachMeAPI.Models
{
    public class DataBase
    {

        private static readonly string CONNECTION_STRING = @"Data Source=teachme.database.windows.net;Initial Catalog=teachme-api;User ID=TeachmeAdmin;Password=Azerty12;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";

       // private static readonly string CONNECTION_STRING = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=teachme-api;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        public static SqlConnection GetConnection()
        {
            return new SqlConnection(DataBase.CONNECTION_STRING);
        }
    }
}