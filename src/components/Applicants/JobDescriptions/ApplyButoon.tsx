import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ApplyButton() {
  return (
    <Dialog>
      <form className="">
        <DialogTrigger asChild>
          <Button
            className="w-44 h-14 font-semibold text-lg text-white bg-[#4640DE]"
            variant="outline"
          >
            Apply
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="h-6">Submit your application</DialogTitle>
            <DialogDescription>
              The following is required and will only be shared with Nomad
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Label htmlFor="salary-expectations">
              What are your salary expectations?
            </Label>
            <Textarea
              id="salary-expectations"
              name="salary-expectations"
              placeholder="Write your answer here.."
              maxLength={500}
            />
            <Label htmlFor="ideal-candidate">
              What makes you the ideal candidate for this position?
            </Label>
            <Textarea
              id="ideal-candidate"
              name="ideal-candidate"
              placeholder="Write your answer here.."
              maxLength={500}
            />
            <Label htmlFor="additional-info">Additional information</Label>
            <Textarea
              id="additional-info"
              name="additionalInfo"
              placeholder="Add a cover letter or anything else you want to share (Max 500 characters)"
              maxLength={500}
            />
            <div className="flex justify-between items-center pt-2">
              <p className="font-medium text-gray-900">Attach your resume</p>
              <Button
                variant="outline"
                className="border-dashed border-2 border-[#4640DE] text-[#4640DE] hover:bg-[#4640DE]/5 text-sm font-semibold relative overflow-hidden"
                type="button"
              >
                Attach Resume/CV
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx"
                />
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button className="text-white bg-[#4640DE]" type="submit">
              Submit Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default ApplyButton
