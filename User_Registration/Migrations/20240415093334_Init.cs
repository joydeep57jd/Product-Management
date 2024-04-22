using Microsoft.EntityFrameworkCore.Migrations;

namespace User_Registration.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User_Career",
                columns: table => new
                {
                    CarrerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Grade10 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Grade12 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Graduate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PostGrad = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkEx = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrTechnology = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User_Career", x => x.CarrerId);
                });

            migrationBuilder.CreateTable(
                name: "User_Contact",
                columns: table => new
                {
                    ContactId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User_Contact", x => x.ContactId);
                });

            migrationBuilder.CreateTable(
                name: "User_Data",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LasttName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User_Data", x => x.UserId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "User_Career");

            migrationBuilder.DropTable(
                name: "User_Contact");

            migrationBuilder.DropTable(
                name: "User_Data");
        }
    }
}
