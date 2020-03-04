namespace UniversityApplicantAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ApplicantEducations",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        ApplicantId = c.Guid(nullable: false),
                        SchoolName = c.String(),
                        GraduationYear = c.Int(nullable: false),
                        Grade = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Applicants", t => t.ApplicantId, cascadeDelete: true)
                .Index(t => t.ApplicantId);
            
            CreateTable(
                "dbo.Applicants",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Fname = c.String(),
                        Lname = c.String(),
                        BirthDate = c.DateTime(nullable: false),
                        Age = c.Int(),
                        Country = c.String(),
                        City = c.String(),
                        Address = c.String(),
                        Gender = c.Int(nullable: false),
                        PhoneNo = c.String(),
                        MaritalStatus = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ApplicantEducations", "ApplicantId", "dbo.Applicants");
            DropIndex("dbo.ApplicantEducations", new[] { "ApplicantId" });
            DropTable("dbo.Applicants");
            DropTable("dbo.ApplicantEducations");
        }
    }
}
