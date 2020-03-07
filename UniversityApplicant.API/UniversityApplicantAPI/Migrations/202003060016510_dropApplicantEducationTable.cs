namespace UniversityApplicantAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dropApplicantEducationTable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ApplicantEducations", "ApplicantId", "dbo.Applicants");
            DropIndex("dbo.ApplicantEducations", new[] { "ApplicantId" });
            AddColumn("dbo.Applicants", "SchoolName", c => c.String());
            AddColumn("dbo.Applicants", "GraduationYear", c => c.Int(nullable: false));
            AddColumn("dbo.Applicants", "Grade", c => c.Int());
            DropTable("dbo.ApplicantEducations");
        }
        
        public override void Down()
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
                .PrimaryKey(t => t.Id);
            
            DropColumn("dbo.Applicants", "Grade");
            DropColumn("dbo.Applicants", "GraduationYear");
            DropColumn("dbo.Applicants", "SchoolName");
            CreateIndex("dbo.ApplicantEducations", "ApplicantId");
            AddForeignKey("dbo.ApplicantEducations", "ApplicantId", "dbo.Applicants", "Id", cascadeDelete: true);
        }
    }
}
