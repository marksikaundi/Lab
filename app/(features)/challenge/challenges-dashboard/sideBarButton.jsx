'use client'
import {Button} from "@/components/ui/button"

function SidebarButton({challengeName, onClick}) {
  const trimmedChallengeName = challengeName.length > 25 ? challengeName.substring(0, 25) + "..." : challengeName;

  return (
    <Button variant="ghost" className="w-full justify-start" onClick={onClick}>
      <span>{trimmedChallengeName}</span>
    </Button>
  );
}

export default SidebarButton