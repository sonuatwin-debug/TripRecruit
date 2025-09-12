import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
          </div>
          <div className="flex space-x-6 text-sm">
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center max-w-4xl mx-auto">
            <h3 className="font-headline font-semibold text-lg mb-4">🌍 携程集团简介</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              携程集团成立于 2010年，至今已有 15年发展历程。总部位于 东南亚核心城市，业务已覆盖 菲律宾、迪拜、泰国、柬埔寨、日本、马来西亚、香港等多个国家和地区。
            </p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              集团现有员工 165000+，始终坚持 诚信 · 专业 · 稳定 · 共赢 的理念，致力于为全球人才提供 正规直招、优质岗位与广阔的发展平台。
            </p>
            <p className="font-semibold text-foreground mt-6">
              💼 选择携程集团，就是选择稳定与未来！
            </p>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 携程集团。版权所有。
        </div>
      </div>
    </footer>
  );
}
