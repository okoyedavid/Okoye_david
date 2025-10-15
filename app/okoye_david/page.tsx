"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { gsap } from "gsap";
import {
  Edit,
  FolderOpen,
  Image,
  Plus,
  Save,
  Trash2,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

const AdminPage = () => {
  // const { user, logout, isAuthenticated } = useAuth();

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Form states
  const [projectForm, setProjectForm] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    category: "",
    technologies: [],
    image: "",
    demoUrl: "",
    githubUrl: "",
    featured: false,
  });

  const [skillForm, setSkillForm] = useState<Omit<Skill, "id">>({
    name: "",
    category: "",
    level: 50,
  });

  // Sample data - in real app, this would come from API
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "React", category: "Frontend", level: 95 },
    { id: "2", name: "Node.js", category: "Backend", level: 90 },
    { id: "3", name: "TypeScript", category: "Language", level: 88 },
  ]);

  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [editingSkill, setEditingSkill] = useState<string | null>(null);
  const [techInput, setTechInput] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      });

      // Tabs animation
      gsap.from(tabsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      // Cards animation
      gsap.from(".admin-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingProject ? { ...projectForm, id: editingProject } : p
        )
      );
      setEditingProject(null);
      // toast({ title: "Success", description: "Project updated successfully" });
    } else {
      const newProject = { ...projectForm, id: Date.now().toString() };
      setProjects((prev) => [...prev, newProject]);
      // toast({ title: "Success", description: "Project created successfully" });
    }
    resetProjectForm();
  };

  const handleSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSkill) {
      setSkills((prev) =>
        prev.map((s) =>
          s.id === editingSkill ? { ...skillForm, id: editingSkill } : s
        )
      );
      setEditingSkill(null);
      // toast({ title: "Success", description: "Skill updated successfully" });
    } else {
      const newSkill = { ...skillForm, id: Date.now().toString() };
      setSkills((prev) => [...prev, newSkill]);
      // toast({ title: "Success", description: "Skill created successfully" });
    }
    resetSkillForm();
  };

  const resetProjectForm = () => {
    setProjectForm({
      title: "",
      description: "",
      category: "",
      technologies: [],
      image: "",
      demoUrl: "",
      githubUrl: "",
      featured: false,
    });
    setTechInput("");
  };

  const resetSkillForm = () => {
    setSkillForm({
      name: "",
      category: "",
      level: 50,
    });
  };

  const editProject = (project: Project) => {
    setProjectForm({
      title: project.title,
      description: project.description,
      category: project.category,
      technologies: project.technologies,
      image: project.image,
      demoUrl: project.demoUrl || "",
      githubUrl: project.githubUrl || "",
      featured: project.featured,
    });
    setEditingProject(project.id);
  };

  const editSkill = (skill: Skill) => {
    setSkillForm({
      name: skill.name,
      category: skill.category,
      level: skill.level,
    });
    setEditingSkill(skill.id);
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    // toast({ title: "Success", description: "Project deleted successfully" });
  };

  const deleteSkill = (id: string) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
    // toast({ title: "Success", description: "Skill deleted successfully" });
  };

  const addTechnology = () => {
    if (
      techInput.trim() &&
      !projectForm.technologies.includes(techInput.trim())
    ) {
      setProjectForm((prev) => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()],
      }));
      setTechInput("");
    }
  };

  const removeTechnology = (tech: string) => {
    setProjectForm((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }));
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen 
     dark:bg-black dark:text-white bg-white text-black
       transition-colors duration-300`}
    >
      <Hero heroRef={heroRef} />

      {/* Management Interface */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span
              className={`text-sm uppercase tracking-wider
               dark:text-red-500 text-blue-600
              } font-semibold`}
            >
              {"// Management"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4 mb-6">
              Content Editor
            </h2>
            <div
              className={`w-12 h-px
               dark:bg-red-500 bg-blue-600
              }`}
            ></div>
          </div>

          <Tabs ref={tabsRef} defaultValue="projects" className="w-full">
            <TabsList
              className={`grid w-full grid-cols-3
               dark:bg-gray-900 bg-gray-100
              `}
            >
              <TabsTrigger
                value="projects"
                className="flex items-center space-x-2"
              >
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex items-center space-x-2"
              >
                <Wrench className="w-4 h-4" />
                <span>Skills</span>
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="flex items-center space-x-2"
              >
                <Image className="w-4 h-4" />
                <span>Media</span>
              </TabsTrigger>
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-8">
              <Card
                className={`admin-card 
                  dark:bg-gray-900 dark:border-gray-700
                    bg-gray-50 border-gray-200
                 p-6`}
              >
                <h3
                  className={`text-xl font-medium 
                   dark:text-white text-black
                   mb-6`}
                >
                  {editingProject ? "Edit Project" : "Add New Project"}
                </h3>

                <form onSubmit={handleProjectSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={projectForm.title}
                        onChange={(e) =>
                          setProjectForm((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        required
                        className="
                         dark:bg-gray-800 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select
                        value={projectForm.category}
                        onValueChange={(value: string) =>
                          setProjectForm((prev) => ({
                            ...prev,
                            category: value,
                          }))
                        }
                      >
                        <SelectTrigger
                          className="
                              dark:bg-gray-800 dark:border-gray-600"
                        >
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Web Development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="Mobile App">Mobile App</SelectItem>
                          <SelectItem value="API">API</SelectItem>
                          <SelectItem value="Tool">Tool</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={projectForm.description}
                      onChange={(e) =>
                        setProjectForm((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      required
                      rows={3}
                      className="
                       dark:bg-gray-800 dark:border-gray-600
                      "
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Image URL</Label>
                      <Input
                        value={projectForm.image}
                        onChange={(e) =>
                          setProjectForm((prev) => ({
                            ...prev,
                            image: e.target.value,
                          }))
                        }
                        className="
                         dark:bg-gray-800 dark:border-gray-600
                        "
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Demo URL (Optional)</Label>
                      <Input
                        value={projectForm.demoUrl}
                        onChange={(e) =>
                          setProjectForm((prev) => ({
                            ...prev,
                            demoUrl: e.target.value,
                          }))
                        }
                        className="
                        dark:bg-gray-800 dark:border-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>GitHub URL (Optional)</Label>
                    <Input
                      value={projectForm.githubUrl}
                      onChange={(e) =>
                        setProjectForm((prev) => ({
                          ...prev,
                          githubUrl: e.target.value,
                        }))
                      }
                      className="
                      dark:bg-gray-800 dark:border-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Technologies</Label>
                    <div className="flex space-x-2 mb-2">
                      <Input
                        value={techInput}
                        onChange={(e) => setTechInput(e.target.value)}
                        placeholder="Add technology"
                        className={`flex-1 
                          dark:bg-gray-800 dark:border-gray-600
                        `}
                        onKeyPress={(e) =>
                          e.key === "Enter" &&
                          (e.preventDefault(), addTechnology())
                        }
                      />

                      <Button type="button" onClick={addTechnology} size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {projectForm.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="flex items-center space-x-1"
                        >
                          <span>{tech}</span>
                          <button
                            type="button"
                            onClick={() => removeTechnology(tech)}
                            className="ml-1 hover:text-red-500"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={projectForm.featured}
                      onCheckedChange={(checked: boolean) =>
                        setProjectForm((prev) => ({
                          ...prev,
                          featured: checked,
                        }))
                      }
                    />

                    <Label>Featured Project</Label>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      type="submit"
                      className="
                          dark:bg-red-600 dark:hover:bg-red-700
                          bg-blue-600 hover:bg-blue-700
                      "
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {editingProject ? "Update" : "Create"} Project
                    </Button>
                    {editingProject && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setEditingProject(null);
                          resetProjectForm();
                        }}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </Card>

              {/* Projects List */}
              <div className="space-y-4">
                <h3
                  className={`text-xl font-medium 
                  dark:text-white text-black
                  `}
                >
                  Existing Projects ({projects.length})
                </h3>
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className={`admin-card 
                     dark:bg-gray-900 dark:border-gray-700
                        : bg-gray-50 border-gray-200
                     p-4`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4
                            className={`text-lg font-medium 
                              dark:text-white text-black
                            `}
                          >
                            {project.title}
                          </h4>
                          {project.featured && (
                            <Badge variant="destructive">Featured</Badge>
                          )}
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                        <p
                          className={`
                          dark:text-gray-400 text-gray-600
                           mb-2`}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button
                          onClick={() => editProject(project)}
                          variant="outline"
                          size="sm"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => deleteProject(project.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-8">
              <Card
                className={`admin-card 
                 
                    dark:bg-gray-900 dark:border-gray-700
                    bg-gray-50 border-gray-200
                p-6`}
              >
                <h3
                  className={`text-xl font-medium 
                    dark:text-white text-black
                   mb-6`}
                >
                  {editingSkill ? "Edit Skill" : "Add New Skill"}
                </h3>

                <form onSubmit={handleSkillSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input
                        value={skillForm.name}
                        onChange={(e) =>
                          setSkillForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        required
                        className="
                         dark:bg-gray-800 dark:border-gray-600
                        "
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select
                        value={skillForm.category}
                        onValueChange={(value) =>
                          setSkillForm((prev) => ({ ...prev, category: value }))
                        }
                      >
                        <SelectTrigger
                          className="
                            
                              dark:bg-gray-800 dark:border-gray-600
                              
                          "
                        >
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Frontend">Frontend</SelectItem>
                          <SelectItem value="Backend">Backend</SelectItem>
                          <SelectItem value="Language">Language</SelectItem>
                          <SelectItem value="Database">Database</SelectItem>
                          <SelectItem value="Cloud">Cloud</SelectItem>
                          <SelectItem value="DevOps">DevOps</SelectItem>
                          <SelectItem value="Framework">Framework</SelectItem>
                          <SelectItem value="Tool">Tool</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Proficiency Level: {skillForm.level}%</Label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skillForm.level}
                      onChange={(e) =>
                        setSkillForm((prev) => ({
                          ...prev,
                          level: parseInt(e.target.value),
                        }))
                      }
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer
                        dark:bg-gray-700 bg-gray-200
                      `}
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      type="submit"
                      className="
                       dark:bg-red-600 dark:hover:bg-red-700
                          bg-blue-600 hover:bg-blue-700
                      "
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {editingSkill ? "Update" : "Create"} Skill
                    </Button>
                    {editingSkill && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setEditingSkill(null);
                          resetSkillForm();
                        }}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </Card>

              {/* Skills List */}
              <div className="space-y-4">
                <h3
                  className={`text-xl font-medium 
                    dark:text-white text-black
                  `}
                >
                  Existing Skills ({skills.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <Card
                      key={skill.id}
                      className={`admin-card 
                      dark:bg-gray-900 dark:border-gray-700
                          bg-gray-50 border-gray-200
                       p-4`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4
                            className={`font-medium 
                              dark:text-white text-black
                            `}
                          >
                            {skill.name}
                          </h4>
                          <Badge variant="outline" className="text-xs mt-1">
                            {skill.category}
                          </Badge>
                        </div>
                        <div className="flex space-x-1">
                          <Button
                            onClick={() => editSkill(skill)}
                            variant="outline"
                            size="sm"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button
                            onClick={() => deleteSkill(skill.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span
                            className="
                             
                                dark:text-gray-400
                              text-gray-600"
                          >
                            Proficiency
                          </span>
                          <span
                            className="
                              dark:text-white text-black
                            "
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className={`w-full h-2 rounded-full 
                            dark:bg-gray-700 bg-gray-200
                          `}
                        >
                          <div
                            className={`h-2 rounded-full ${
                              skill.level >= 90
                                ? "bg-gradient-to-r from-green-500 to-green-600"
                                : skill.level >= 80
                                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                : "bg-gradient-to-r from-yellow-500 to-orange-500"
                            }`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Media Tab */}
            <TabsContent value="media" className="space-y-8">
              <Card
                className={`admin-card 

 dark:bg-gray-900 dark:border-gray-700
                    bg-gray-50 border-gray-200
                p-6`}
              >
                <h3
                  className={`text-xl font-medium
                   dark:text-white text-black
                   mb-6`}
                >
                  Media Management
                </h3>
                <p
                  className={`
                  dark:text-gray-400 text-gray-600 mb-4`}
                >
                  Upload and manage images, videos, and other media assets.
                </p>
                <div
                  className={`border-2 border-dashed 
                    dark:border-gray-600 border-gray-300
                  rounded-lg p-8 text-center`}
                >
                  <Image
                    className={`w-12 h-12 mx-auto mb-4 
                      dark:text-gray-500 text-gray-400
                    `}
                  />
                  <p
                    className={`
                      dark:text-gray-400 text-gray-600
                     mb-4`}
                  >
                    Drag and drop files here, or click to browse
                  </p>
                  <Button variant="outline">Choose Files</Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
