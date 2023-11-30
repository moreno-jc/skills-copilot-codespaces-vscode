function skillsMember(name, skills) {
    return {
        name: name || "",
        skills: skills || [],
        displaySkills: function() {
            if (this.skills.length === 0) {
                return "This member has no skills.";
            } else {
                return "Skills: " + this.skills.join(", ");
            }
        }
    };
}