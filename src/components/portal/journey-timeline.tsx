import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { JourneyMilestone } from "@/lib/portal-content";

const statusClass = (status: JourneyMilestone["status"]) => status.toLowerCase().replace(" ", "-");

export function JourneyTimeline({ milestones }: { milestones: readonly JourneyMilestone[] }) {
  const [activeId, setActiveId] = useState(
    milestones.find((item) => item.status === "In Progress")?.id ?? milestones[0]?.id ?? "",
  );

  return (
    <div className="journey-timeline" aria-label="Farm Assist journey milestones">
      {milestones.map((milestone, index) => {
        const open = activeId === milestone.id;
        return (
          <article
            className={`journey-milestone journey-${statusClass(milestone.status)} ${open ? "journey-milestone-active" : ""}`}
            id={`milestone-${milestone.id}`}
            key={milestone.id}
          >
            <div className="journey-marker" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <Button
              className="journey-milestone-toggle"
              variant="ghost"
              aria-expanded={open}
              aria-controls={`milestone-details-${milestone.id}`}
              onClick={() => setActiveId(open ? "" : milestone.id)}
            >
              <span className="journey-milestone-heading">
                <span className="journey-period">
                  <CalendarDays size={15} />
                  {milestone.period}
                </span>
                <span className="journey-category">{milestone.category}</span>
                <strong>{milestone.title}</strong>
                <span className="journey-summary">{milestone.summary}</span>
              </span>
              <span className={`journey-status journey-status-${statusClass(milestone.status)}`}>
                {milestone.status}
              </span>
              <ChevronDown className="journey-chevron" aria-hidden="true" />
            </Button>
            <div
              className="journey-milestone-detail"
              id={`milestone-details-${milestone.id}`}
              hidden={!open}
            >
              {milestone.image && (
                <img
                  src={milestone.image}
                  alt={milestone.imageAlt ?? ""}
                  width={704}
                  height={480}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <p>{milestone.detail}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
