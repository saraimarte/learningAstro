//here, you define the blueprint of your collections 

//import defineCollection function from astro's content collections api
import { defineCollection } from "astro:content";

//import zod from the api 
import { z } from "astro:content"; 

//create a collection of students
const students = defineCollection({
//schema/blueprint
    type: "data" , //data collection 
    schema : z.object({
        name : z.string(),
        grade : z.enum(['1', '2', '3', '4', '5']),
        allergies : z.string().optional(),
    }),
});

const blog = defineCollection({
//schema/blueprint
    type: "content" , // content collection 
    schema : z.object({
        title : z.string(),
        author : z.string(),
        description : z.string().optional(),
    }),
});

//export your collections 
export const collections = {
    students,
    blog, 
}