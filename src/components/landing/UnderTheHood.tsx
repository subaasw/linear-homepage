import { UnderTheHoodAssetSVG } from "@/assets";
import { BadgeCheck } from "lucide-react";

export default function UnderTheHoodSection() {
  return (
    <section className="page_section py-40 overflow-hidden">
      <div className="container mx-auto px-4 font-medium">
        <div className="grid grid-cols-2 gap-2 mb-14">
          <div>
            <span className="mb-4 block">
              <div className="flex items-center gap-2 text-lightgray mb-3">
                <div className="h-2 w-3.5 border border-dimgrey rounded-full"></div>
                <div className="flex items-end gap-1.5 text-sm group-hover:gap-3 transition-all duration-150">
                  <span>Under the hood</span>
                </div>
              </div>
              <h2 className="tracking-tighter font-medium leading-16">
                Built on strong foundations
              </h2>
            </span>
            <p className="text-gray font-medium max-w-96 mb-12">
              Linear is so simple to use, it's easy to overlook the wealth of
              complex technologies packed under the hood that keep Linear
              robust, safe, and blazing fast.
            </p>
            <hr className="w-[80%]" />

            <table className="[&_td]:text-gray font-normal [&_td]:p-6 text-sm text-left w-[85%] table-fixed ">
              <tbody>
                <tr>
                  <th>Linear Sync Engine</th>
                  <td>
                    Built with a high-performance architecture and an obsessive
                    focus on speed.
                  </td>
                </tr>
                <tr>
                  <th>Linear Sync Engine</th>
                  <td>
                    Built with a high-performance architecture and an obsessive
                    focus on speed.
                  </td>
                </tr>
                <tr>
                  <th>Linear Sync Engine</th>
                  <td>
                    Built with a high-performance architecture and an obsessive
                    focus on speed.
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex w-[80%] mt-4 justify-between gap-8 border-t">
              <div className="space-y-4 pr-8 border-r pt-8">
                <img
                  height={64}
                  width={64}
                  src="/images/soc2.avif"
                  alt="Soc2 Logo"
                />
                <div className="text-dimgrey text-sm font-normal flex gap-2 items-center">
                  <span>SOC 2</span>
                  <BadgeCheck className="h-5 w-5 fill-dimgrey stroke-richblack" />
                </div>
              </div>

              <div className="space-y-4 text-center pr-8 border-r pt-8">
                <img
                  height={64}
                  width={64}
                  src="/images/gdpr.avif"
                  alt="gdpr Logo"
                />
                <div className="text-dimgrey text-sm font-normal flex gap-2 items-center">
                  <span>GDPR</span>
                  <BadgeCheck className="h-5 w-5 fill-dimgrey stroke-richblack" />
                </div>
              </div>

              <div className="space-y-4 pr-8 pt-8">
                <img
                  height={64}
                  width={64}
                  src="/images/hipaa.avif"
                  alt="Hipaa Logo"
                />
                <div className="text-dimgrey text-sm font-normal flex gap-2 items-center">
                  <span>HIPAA</span>
                  <BadgeCheck className="h-5 w-5 fill-dimgrey stroke-richblack" />
                </div>
              </div>
            </div>
          </div>

          <UnderTheHoodAssetSVG className="-ml-6 mt-6" />
        </div>
      </div>
    </section>
  );
}
