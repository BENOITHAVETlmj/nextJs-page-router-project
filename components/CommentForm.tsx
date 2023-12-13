'use client';

import { createCommentAction } from "@/app/reviews/[slug]/actions";
import { error } from "console";
import { FormEvent, useState } from "react";

export interface CommentFormProps {
    slug: string;
    title: string;
  }
export interface ActionError {
  isError: true;
  message: string;
}
  
   export default function CommentForm({ slug, title }: CommentFormProps) {
    const [error, setError] = useState<ActionError | null>(null);
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);
      const form = event.currentTarget;
      const formData = new FormData(form);
      const result = await createCommentAction(formData);
      console.log('result:', result);
      if(result?.isError) {
        setError(result as ActionError)
      } else {
        form.reset()
      }
    };    

    return (
      <form onSubmit={handleSubmit}
        className="border bg-white flex flex-col gap-2 mt-3 px-3 py-3 rounded">
        <p className="pb-1">
          Already played <strong>{title}</strong>? Have your say!
        </p>
        <input type="hidden" name="slug" value={slug} />
        <div className="flex">
          <label htmlFor="userField" className="shrink-0 w-32">
            Your name
          </label>
          <input id="userField" name="user"
            className="border px-2 py-1 rounded w-48"
          />
        </div>
        <div className="flex">
          <label htmlFor="messageField" className="shrink-0 w-32">
            Your comment
          </label>
          <textarea id="messageField" name="message"
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        {Boolean(error) && (
          <p className="text-red-700">{error.message}</p>
        )}
        <button type="submit"
          className="bg-orange-800 rounded px-2 py-1 self-center
                     text-slate-50 w-32 hover:bg-orange-700">
          Submit
        </button>
      </form>
    );
  }