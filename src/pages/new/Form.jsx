"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

  const ACCEPTED_IMAGE_TYPES = [
    'jpeg',
    'jpg',
    'png',
    'webp',
  ];

const formSchema = z.object({
  // uploadImage: z.any()
    // .refine(file => {
    //   if (!file || file.length === 0) {
    //     return false; // No files uploaded
    //   }
    //   return true;
    // }, { message: "Expected a file" })
    // // .refine((file) => file.size < 2000000, "Max size is 2MB.")
    // .refine(file => {
    //   const extension = file.split(".").pop().toLowerCase();
    //   return ACCEPTED_IMAGE_TYPES.includes(extension)
    // }, { message: "Please select a valid image file (jpg, jpeg, png, webp)" }),
  firstName: z.string().min(2, {
    message: "First name is required",
  }),
  lastName: z.string().optional(),
  contact: z.string().min(2, {
    message: "Contact is required",
  }),
  address: z.string().min(2, {
    message: "Address is required",
  }),
  country: z.string().min(2, {
    message: "Country is required",
  }),
  username: z.string().min(6, {
    message: "Username must be at least 8 characters long",
  }),
  email: z.string()
    .min(2, { message: "Please input your e-mail address" })
    .email("This is not a valid email."),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
})

export function ProfileForm({onImageChange}) {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            contact: "",
            address: "",
            country: "",
            username: "",
            email: "",
            password: "",
        },
    });
    
    // 2. Define a submit handler.
    function onSubmit(data) {
        // Do something with the form values.
        console.log(data)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
        {/* LEFT */}
        <div className="col-span-1 space-y-4">
          <FormField
            control={form.control}
            name="uploadImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Photo</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        // Perform upload logic and get image URL
                        const imageUrl = URL.createObjectURL(file);
                        // Pass the image URL to the parent component
                        onImageChange(imageUrl);
                        console.log(file);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <Input placeholder="+123-456-789" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="90 Bedford Street, Greenwich Village" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* RIGHT */}
        <div className="col-span-1 space-y-4">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="USA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="email@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="mt-5 w-fit bg-blue-500 hover:bg-blue-600 hover:text-white text-white">Submit</Button>
      </form>
    </Form>
  )
}